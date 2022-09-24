export function iconSelect(){
    const rand = Math.floor(Math.random() * 6 + 1);
  return (
    "/Users/liavshitrit/Documents/web-dev/Teams-maker/src/components/UI/Icons/players/player" +
    rand.toString() +
    ".png"
  );
}

