export default function getMedianColor(image: HTMLImageElement): string {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) return '';
    canvas.width = image.width;
    canvas.height = image.height;

    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;

    const colorBuckets: Record<string, number> = {};

    const tolerance = 10;
    const getColorKey = (r: number, g: number, b: number) => `${Math.floor(r / tolerance) * tolerance},${Math.floor(g / tolerance) * tolerance},${Math.floor(b / tolerance) * tolerance}`;

    for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];

        const colorKey = getColorKey(r, g, b);

        if (!colorBuckets[colorKey]) {
            colorBuckets[colorKey] = 0;
        }
        colorBuckets[colorKey]++;
    }

    let mostFrequentColor = '';
    let maxCount = 0;

    for (const colorKey in colorBuckets) {
        if (colorBuckets[colorKey] > maxCount) {
            mostFrequentColor = colorKey;
            maxCount = colorBuckets[colorKey];
        }
    }

    return `rgb(${mostFrequentColor})`;
}
