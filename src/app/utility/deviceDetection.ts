'use client';

export default function getDeviceType() {
    if(typeof window !== "undefined") {
        const userAgent = navigator.userAgent;
        const width = window.innerWidth;
        if (/Mobi|Android/i.test(userAgent) || width <= 768) {
            return "Mobile";
        } else if (/Tablet|iPad/i.test(userAgent) || (width > 768 && width <= 1024)) {
            return "Tablet";
        } else {
            return "Desktop";
        }
    }
}