import { NextRequest, NextResponse } from 'next/server';
import {
    unsealEventsResponse,
    DecryptionAlgorithm,
} from '@fingerprintjs/fingerprintjs-pro-server-api';


export async function POST(req: NextRequest) {
    const encryptionKey = process.env.FINGERPRINTJS_ENCRYPTION_KEY;

    if (!encryptionKey) {
        return NextResponse.json({ error: 'Missing encryption key' }, { status: 500 });
    }

    let body: { sealedResult: string };

    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
    }

    if (!body.sealedResult) {
        return NextResponse.json({ error: 'Missing sealedData in request body' }, { status: 400 });
    }

    try {
        const buffer = Buffer.from(body.sealedResult, 'base64');

        const unsealedResult = await unsealEventsResponse(buffer, [
            {
                key: Buffer.from(encryptionKey, 'base64'),
                algorithm: DecryptionAlgorithm.Aes256Gcm
            }
        ]);

        return NextResponse.json({ unsealedResult });
    } catch (error) {
        console.error('Failed to unseal event:', error);
        return NextResponse.json({ error: 'Failed to unseal event' }, { status: 400 });
    }
}
