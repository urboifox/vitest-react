export default function ProductImageGallery({ imageUrls }: { imageUrls: string[] }) {
    if (imageUrls.length === 0) return null;

    return (
        <ul>
            {imageUrls.map((url) => {
                return (
                    <li key={url}>
                        <img src={url} />
                    </li>
                );
            })}
        </ul>
    );
}
