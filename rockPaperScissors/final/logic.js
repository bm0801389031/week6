const rps = (p1, p2) => {
  //3 if paper cases and 3 lines per case
  // (if,if,return) 
  if (p1 === 'paper'){
    if(p2 === 'rock')
    return 'Player 1 won!'
  }
      if (p1 === 'paper'){
    if(p2 === 'scissors')
    return 'Player 2 won!'
      }
    if (p1 === 'paper'){
    if(p2 === 'paper')
    return 'Draw!'
  }
  // 3 if scissors cases 3 lines per case
  // (if,if,return)
    if (p1 === 'scissors'){
    if(p2 === 'paper')
    return 'Player 1 won!'
  }
    if (p1 === 'scissors'){
    if(p2 === 'rock')
    return 'Player 2 won!'
  }
    if (p1 === 'scissors'){
    if(p2 === 'scissors')
    return 'Draw!'
  }
  // 3 if rock cases 3 lines per case
  // (if,if,return)
    if (p1 === 'rock'){
    if(p2 === 'scissors')
    return 'Player 1 won!'
  }
    if (p1 === 'rock'){
    if(p2 === 'paper')
    return 'Player 2 won!'
  }
    if (p1 === 'rock'){
    if(p2 === 'rock')
    return 'Draw!'
  }
};