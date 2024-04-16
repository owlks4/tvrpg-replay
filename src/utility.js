function lerp(A, B, step){
    return A + (step * (B - A)); 
}
function lerpBetweenVec3s(vecA,vecB,step){
  return [lerp(vecA[0],vecB[0],step),
          lerp(vecA[1],vecB[1],step),
          lerp(vecA[2],vecB[2],step)];
}

function getDistanceBetweenVector3s(vecA, vecB){
  let diffX = vecA[0] - vecB[0];
  let diffY = vecA[1] - vecB[1];
  let diffZ = vecA[2] - vecB[2];

  return Math.sqrt(Math.pow(diffX, 2)
                 + Math.pow(diffY, 2)
                 + Math.pow(diffZ, 2));
}

export {getDistanceBetweenVector3s, lerpBetweenVec3s, lerp};