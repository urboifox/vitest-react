import { useState } from "react";

export default function ExpandableText({ text, limit = 20 }: { text: string; limit?: number }) {
    const [isExpanded, setIsExpanded] = useState(false);

    if (text.length < limit) return <article>{text}</article>;

    return (
        <div>
            {isExpanded ? (
                <article>{text}</article>
            ) : (
                <article>{text.substring(0, limit)}...</article>
            )}
            <button onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? "Show less" : "Show more"}
            </button>
        </div>
    );
}
