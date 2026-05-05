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
  { id: "OAhoVGOZGmc" }, // https://youtu.be/OAhoVGOZGmc
  { id: "ikm-cXbxrbg" }, // https://youtu.be/ikm-cXbxrbg
  { id: "YDBNVvqEh3I" }, // https://youtu.be/YDBNVvqEh3I
  { id: "ccTmvwa48xQ" }, // https://youtu.be/ccTmvwa48xQ
  { id: "8UkqDtm639c" }, // https://youtu.be/8UkqDtm639c
  { id: "qkaEzo7WsF0" }, // https://youtu.be/qkaEzo7WsF0
  { id: "-HC_yWkw28Q" }, // https://youtu.be/-HC_yWkw28Q
  { id: "IzLV9_iEpVM" }, // https://youtu.be/IzLV9_iEpVM
];
