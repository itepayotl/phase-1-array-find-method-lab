function superbowlWin(data){
    const win = data.find(superbowlWin => superbowlWin.result === "W");
    return  win ? win.year : undefined
}