import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import styles from "./index.module.less";

const cards = [
  "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg",
  // "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg",
  // "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg",
  // "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
];
// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i: number) => ({
  x: (window.innerWidth - 150) * Math.random(),
  y: (window.innerHeight - 285) * Math.random(),
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

let tempX = 0;
let tempY = 0;

const Deck = ({ setBlogKey }: any) => {
  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useDrag(({ args: [index], down, movement: [mx, my], first }) => {
    api.start((i, ctrl) => {
      if (index !== i) return;
      if (first) {
        tempX = ctrl.get().x;
        tempY = ctrl.get().y;
      }
      const x = mx + tempX;
      const y = my + tempY;
      const rot = mx / 100;
      const scale = down ? 1.1 : 1;
      return {
        x,
        y,
        rot,
        scale,
        config: { friction: 50, tension: down ? 800 : 500 },
      };
    });
  });
  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div
          className={styles.deck}
          key={i}
          style={{ x, y }}
          onDoubleClick={() => {
            console.log("clicked");
            setBlogKey(i);
          }}
        >
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i]})`,
            }}
          />
        </animated.div>
      ))}
    </>
  );
};

export default Deck;
