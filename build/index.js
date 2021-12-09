import fs from 'fs';

function RpcHealthCheck(ctx, logger, nk, payload) {
  logger.info("Healthcheck RPC called");
  return JSON.stringify({
    success: true
  });
}

function ServerValidate(ctx, logger, nk, payload) {
  logger.info("payload %q", payload);

  if (ctx.userId) {
    throw Error("Cannot invoke this function from user session!");
  }

  var request = JSON.parse(payload);
  var collectionName = "matchToken";
  var objectIds = [{
    collection: collectionName,
    key: request.matchId,
    userId: request.userId
  }];
  var result = null;

  try {
    result = nk.storageRead(objectIds)[0];
  } catch (error) {
    throw Error(error);
  }

  return JSON.stringify({
    result: result
  });
}

function ReadFile(ctx, logger, nk, pathObj) {
  logger.info("path %q", pathObj);
  var request = JSON.parse(pathObj);
  var data = fs.readFileSync(request.path);
  logger.info(data.toString());
  return JSON.stringify({
    data: data
  });
}

function InitModule(ctx, logger, nk, initializer) {
  initializer.registerRpc("healthcheck", RpcHealthCheck);
  initializer.registerRpc("servervalidate", ServerValidate);
  initializer.registerRpc("readfile", ReadFile);
  logger.info("JavaScript module loaded");
}

!InitModule && InitModule.bind(null);
