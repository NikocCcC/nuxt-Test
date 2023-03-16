export default function () {
  const count = ref(0);

  const increase = () => {
    count.value += 1;
  };

  const minus = () => {
    count.value -= 1;
  };
  return {
    count,
    increase,
    minus
  };
}
