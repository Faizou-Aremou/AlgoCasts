// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1, 2, 3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
// matrix(5)
       [[1,2,3,4,5],
        [16,17,18,19,6], // recursive + 1 vers l'avant dernier, recursive + 1 vers le bas jusqu'à l'avant derniere ligne,
        [15,24,25,20,7],
        [14,23,22,21,8], // 
        [13,12,11,10,9],
       ]

/**
 * matrix(0,t) = []
 * matrix(n+1,t) = soit <pR> = createMRow(n,t);
 *                      createInsideRow(t,pR)
 *                              
 * 
 * 
 * createInsideRow(0,pR) = []
 * createInsideRow(1,[e]) =  [e+1]
 * createInsideRow(n+1,e°S) = soit <pR> = createInsideRow(n,S)
 *                                  lengh(pR)=n
 * la premiere ligne decompte le nombre; 
 * la deuxième: dernier element seconde ligne = t+1; le premier element = t+(t-1)+(t-1)+(t-2)
 *                                                                      = t+t -1 + t-1+t-2
 *                                                                      = 4t-4
 *                                                                      = 4(t-1)
 *                                                 ; recursi + 1 pour les autres (pas sur)
 * 
 * la troisième: dernier element troisième ligne = t+2; le premier element = t+(t-1)+(t-1)
 *                                                                         = (4t-4) - 1
 *                                                 ; si c'est le dernier (recursive - 1), sinon l'avant dernier elemt=l'avant dernier elemt de la ligne precedent + 1; recursivité -1 pour les autres
 * 
 * @param n 
 * @returns 
 */
export function matrix(n: number): number[][] {
  return [ ];
}
