import { ICustom } from "~~/types/customs/customs";

export default defineEventHandler((event) => {
  const getCustoms = $fetch("https://api.nuxtjs.dev/mountains");
  return getCustoms;
});
