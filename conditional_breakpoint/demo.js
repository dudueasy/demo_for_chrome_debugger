console.log('start debugging')
debugger

// 通过 debugger 来获得 i 为 8971 时的 md5 值
for(let i = 0; i< 10000 ; i++){
  let  currentHash = md5(i)
}
