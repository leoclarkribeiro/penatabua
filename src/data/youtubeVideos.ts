/**
 * Manual list of channel videos (add `id` from youtu.be/... or watch?v=...).
 * https://www.youtube.com/@LeoClarkP%C3%A9naT%C3%A1bua/videos
 */
export type YoutubeManualEntry = {
  id: string;
  /** Optional fixed title; when omitted, title is loaded from YouTube oEmbed. */
  title?: string;
};

export const youtubeManualVideos: YoutubeManualEntry[] = [
  { id: "uKKzLr8APUI" }, // https://youtu.be/uKKzLr8APUI
  { id: "IJwmjmvtrnM" }, // https://youtu.be/IJwmjmvtrnM
  { id: "X2F4bn4YnLU" }, // https://youtu.be/X2F4bn4YnLU
  { id: "zL_PC27Vh5c" }, // https://youtu.be/zL_PC27Vh5c
  { id: "_uxoHk1Lr6g" }, // https://youtu.be/_uxoHk1Lr6g
  { id: "kH5GT8dAVO8" }, // https://youtu.be/kH5GT8dAVO8
  { id: "0gpKpE_-CJ8" }, // https://youtu.be/0gpKpE_-CJ8
  { id: "xN0klmIzx0o" }, // https://youtu.be/xN0klmIzx0o
];
