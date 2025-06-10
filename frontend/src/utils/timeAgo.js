// src/utils/timeAgo.js
export function getTimeAgo(createdAt) {
    const now = new Date();
    const past = new Date(createdAt);
    const diffMs = now - past;
    const diffSec = Math.floor(diffMs / 1000);

    if (diffSec < 60) {
        return `${diffSec}s ago`;
    }
    const diffMin = Math.floor(diffSec / 60);
    if (diffMin < 60) {
        return `${diffMin}m ago`;
    }
    const diffHrs = Math.floor(diffMin / 60);
    if (diffHrs < 24) {
        return `${diffHrs}h ago`;
    }
    const diffDays = Math.floor(diffHrs / 24);
    if (diffDays < 30) {
        return `${diffDays}d ago`;
    }
    const diffMonths = Math.floor(diffDays / 30);
    if (diffMonths < 12) {
        return `${diffMonths}mo ago`;
    }
    const diffYears = Math.floor(diffMonths / 12);
    return `${diffYears}y ago`;
}
