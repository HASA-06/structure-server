const asyncLogger = async (startMessage: string, endMessage: string, functionList: Array<any>) => {
  await (async() => {
    console.info(`- ${ startMessage }\n`)
  })();
  
  for (const func of functionList) {
    await func;
  }
  
  await (async() => {
    console.log(`=> ${ endMessage }\n`);
  })();
}

export default asyncLogger;