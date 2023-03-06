//203/204 test approved
//fails at
//test: n = 5, edges = [[1,5],[1,4],[5,3],[3,2]], t = 3, target = 2
//observations:
//1. it is extremely slow for larger graphs and it may exceed the maximum call stack
//2. hard to read cuz it is kinda my first brute force attempt
function frogPosition(
  n: number,
  edges: number[][],
  t: number,
  target: number,
): any {
  let probability = 1;
  const adj = new Array(n)
  let possiblePaths = Array(n).fill(0)
  for (let i = 0; i < adj.length; i++) adj[i] = []
  edges.forEach((edge) => {
      const [head,tail] = edge//.sort((head,tail) => head > tail ? 0 : -1)
      adj[head-1].push(tail)
  })
  const _find = (Ttarget:number,paths:number[],time:number) => {
      //case ran out of time
      if(time === t) probability = 0
      //otherwise keep searching
      else {
          let auxI
          //find the next upper node
          adj.find((elem,i) => {
              if(elem.includes(Ttarget)) {
                  auxI = i
                  paths[auxI] = elem.length
                  return true
              }
          })
          if(auxI) _find(auxI+1,paths,time+1)
          //case you still have change to go deeper and still have time left, then possbilities are 0
          else if(adj[target-1].length && time+1 < t) {
              probability = 0
          }
          //case there's no more upper nodes, we have found the head so we stop
          else {
              if(Ttarget === 1 && !time && edges.length) probability = 0
              possiblePaths = paths
          }
      }
  }
  _find(target,possiblePaths,0)
  return possiblePaths.reduce((prev,curr) => curr ? prev/curr : prev,probability)
}
/* console.log( */
/*   frogPosition(7, [[1, 2], [1, 3], [1, 7], [2, 4], [2, 6], [3, 5]], 2, 4), //0.166... */
/*   "\n-", */
/* ); */
/* console.log( */
/*   frogPosition(7, [[1, 2], [1, 3], [1, 7], [2, 4], [3, 5]], 3, 7), //0.33... */
/*   "-\n", */
/* ); */
/* console.log( */
/*   frogPosition(7, [[1, 2], [1, 3], [1, 7], [2, 4], [2, 6], [3, 5]], 4, 7), //0.33... */
/*   "-\n", */
/* ); */
/**/
/* console.log( */
/*   frogPosition(7, [[1, 2], [1, 3], [1, 7], [2, 4], [2, 6], [3, 5]], 1, 5), //0.33... */
/*   "-\nhey", */
/* ); */
/* console.log( */
/*   frogPosition( */
/*     8, */
/*     [[2, 1], [3, 2], [4, 1], [5, 1], [6, 4], [7, 1], [8, 7]], */
/*     7, */
/*     7, */
/*   ), //0.0 */
/*   "-\n", */
/* ); */
/* console.log( */
/*   frogPosition(3, [[2, 1], [3, 2]], 1, 2), //1.0 */
/*   "\n-", */
/* ); */
/* console.log( */
/*     frogPosition(7,[[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]],20,6) */
/* ) */
/* console.log( */
/*     frogPosition(10,[[2,1],[3,2],[4,2],[5,2],[6,5],[7,1],[8,3],[9,1],[10,1]],1,9) */
/* ) */
/* console.log( */
/*     frogPosition(10,[[1,2],[2,3],[2,4],[2,5],[5,6],[1,7],[3,8],[1,9],[1,10]],1,9) */
/* ) */
/* console.log(); */
/* console.log( */
/*     frogPosition(16,[[2,1],[3,1],[4,1],[5,4],[6,3],[7,4],[8,7],[9,5],[10,4],[11,7],[12,3],[13,11],[14,3],[15,13],[16,15]],1,1) */
/* ) */
/* console.log( */
/*     frogPosition(5,[[1,5],[1,4],[5,3],[3,2]],3,2) */
/* ) */
/* console.log( */
/*     frogPosition(5,[[1,2],[1,4],[2,3],[3,5]],3,2) */
/* ) */
/* console.log( */
/*     frogPosition(5,[[1,2],[1,3],[3,4],[4,5]],3,2) */
/* ) */
