// type AllType = {
//   name: string;
//   position: number;
//   color: string;
//   weight: number;
// };

// function compare<T extends keyof AllType, U extends keyof AllType>(
//   top: Pick<AllType, T>,
//   bottom: Pick<AllType, U>
// ): AllType {
//   return {
//     name:
//       (top as Pick<AllType, "name">).name ??
//       (bottom as Pick<AllType, "name">).name,
//     color:
//       (top as Pick<AllType, "color">).color ??
//       (bottom as Pick<AllType, "color">).color,
//     position:
//       (bottom as Pick<AllType, "position">).position ??
//       (top as Pick<AllType, "position">).position,
//     weight:
//       (bottom as Pick<AllType, "weight">).weight ??
//       (top as Pick<AllType, "weight">).weight,
//   };
// }

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends AllType>(
  top: Pick<T, "color" | "name">,
  bottom: Pick<T, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
