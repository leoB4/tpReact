import { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import * as THREE from 'three'

const Cube = ({ number, color, scale, animate, id, rotation }) => {
  const cube = useRef()
  let position = [(id * 2 % 20 - 10), 5 - (id / 5), -5];
  let texture = showNumber((number + 1), color, 80)

  useFrame(() => {
    if (animate) {
      rotation += 0.05;
    }
    cube.current.rotation.x = rotation;
  })

  return (
    <mesh
      ref={cube}
      position={position}
      rotation={[rotation, 0, 0]}>
      <boxBufferGeometry args={[scale, scale, scale]} />
      {<meshStandardMaterial map={texture} />
      }
    </mesh >
  )

}

export default Cube;

function showNumber(text, background, size) {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");

  ctx.font = size + "pt Arial";

  ctx.fillStyle = background;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  var texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;

  return texture;
}