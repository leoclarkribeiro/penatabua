import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { youtubeManualVideos } from "@/data/youtubeVideos";
import { cn } from "@/lib/utils";

function watchUrl(videoId: string) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

function YoutubeGridCard({ videoId, presetTitle }: { videoId: string; presetTitle?: string }) {
  const [title, setTitle] = useState(presetTitle ?? "");

  useEffect(() => {
    if (presetTitle) return;
    let cancelled = false;
    const oembed = `https://www.youtube.com/oembed?url=${encodeURIComponent(watchUrl(videoId))}&format=json`;
    fetch(oembed)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data: { title: string }) => {
        if (!cancelled) setTitle(data.title);
      })
      .catch(() => {
        if (!cancelled) setTitle("Ver no YouTube");
      });
    return () => {
      cancelled = true;
    };
  }, [videoId, presetTitle]);

  const displayTitle = presetTitle ?? title;

  return (
    <a
      href={watchUrl(videoId)}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <article className="overflow-hidden rounded-xl border border-border bg-neutral-950 shadow-md transition-colors hover:border-primary/40">
        <div className="relative aspect-video w-full overflow-hidden bg-black">
          <img
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt=""
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            width={480}
            height={360}
          />
          <div
            className={cn(
              "pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent",
              "opacity-80 transition-opacity group-hover:opacity-95",
            )}
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/60 text-white ring-2 ring-white/30 backdrop-blur-sm transition-transform group-hover:scale-110">
              <Play className="ml-0.5 h-7 w-7 fill-current" aria-hidden />
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-3 pt-8">
            <h3 className="line-clamp-2 font-body text-sm font-medium leading-snug text-white drop-shadow md:text-base">
              {displayTitle || "\u00a0"}
            </h3>
          </div>
        </div>
      </article>
    </a>
  );
}

const VideoSection = () => {
  return (
    <section id="video" className="bg-card py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 text-center md:mb-16">
          <p className="font-body mb-4 text-sm uppercase tracking-[0.3em] text-primary">Arquivo</p>
          <h2 className="font-display text-3xl font-bold tracking-wide md:text-5xl lg:text-6xl">
            <span className="text-foreground">VÍDEOS NO </span>
            <span className="text-gradient-gold">YOUTUBE</span>
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-4">
          {youtubeManualVideos.map((v) => (
            <YoutubeGridCard key={v.id} videoId={v.id} presetTitle={v.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
