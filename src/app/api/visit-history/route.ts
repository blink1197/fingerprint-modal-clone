import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const { visitorId } = await req.json();
    const apiKey = process.env.FINGERPRINTJS_SECRET_API_KEY;

    if (!visitorId) {
        return NextResponse.json({ error: 'Missing visitorId' }, { status: 400 });
    }

    if (!apiKey) {
        return NextResponse.json({ error: 'Missing FingerprintJS API key' }, { status: 500 });
    }

    try {
        const response = await fetch(`https://ap.api.fpjs.io/visitors/${visitorId}?api_key=${apiKey}`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
            },
        });

        if (!response.ok) {
            const errorText = await response.text();
            return NextResponse.json({ error: errorText }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (err) {
        console.error('Error fetching visit history:', err);
        return NextResponse.json({ error: 'Server error while fetching visit history' }, { status: 500 });
    }
}
