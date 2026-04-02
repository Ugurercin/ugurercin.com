interface DownloadButtonProps {
  store: "appstore" | "playstore";
  url: string;
}

export default function DownloadButton({ store, url }: DownloadButtonProps) {
  if (!url) return null;

  const isAppStore = store === "appstore";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/20 hover:bg-white/[0.08]"
    >
      {isAppStore ? (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.18 23.76c.3.17.64.22.99.14l12.24-7.07-2.75-2.75-10.48 9.68zM.46 1.51C.17 1.83 0 2.3 0 2.9v18.2c0 .6.17 1.07.46 1.39l.07.07 10.2-10.2v-.24L.53 1.44l-.07.07zM20.51 9.8l-2.74-1.58-3.07 3.07 3.07 3.07 2.76-1.59c.79-.45.79-1.19-.02-1.97zM3.18.24l12.24 7.07-2.75 2.75L2.19.38C2.49.06 2.88 0 3.18.24z" />
        </svg>
      )}
      <span>
        {isAppStore ? (
          <>
            <span className="block text-[9px] leading-none text-white/50">
              Download on the
            </span>
            <span className="block text-sm leading-tight">App Store</span>
          </>
        ) : (
          <>
            <span className="block text-[9px] leading-none text-white/50">
              Get it on
            </span>
            <span className="block text-sm leading-tight">Google Play</span>
          </>
        )}
      </span>
    </a>
  );
}
