export const getTimeDifference = (startMs: number, endMs: number) => {
    const diffMs = Math.abs(endMs - startMs);

    const minutes = Math.floor(diffMs / (1000 * 60));
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    return { minutes, hours, days };
}