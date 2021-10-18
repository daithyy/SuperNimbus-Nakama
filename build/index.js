"use strict";
var InitModule = function (ctx, logger, nk, initializer) {
    initializer.registerRpc("healthcheck", RpcHealthCheck);
    initializer.registerRpc("servervalidate", ServerValidate);
    logger.info("JavaScript module loaded");
};
var RpcHealthCheck = function (ctx, logger, nk, payload) {
    logger.info("Healthcheck RPC called");
    return JSON.stringify({ success: true });
};
var ServerValidate = function (ctx, logger, nk, payload) {
    logger.info("payload %q", payload);
    if (ctx.userId) {
        // Reject non server-to-server call
        throw Error("Cannot invoke this function from user session!");
    }
    var request = JSON.parse(payload);
    var collectionName = "matchToken";
    logger.info(request.userId);
    logger.info(request.matchId);
    var objectIds = [
        {
            collection: collectionName,
            key: request.matchId,
            userId: request.userId,
        },
    ];
    var result = null;
    try {
        result = nk.storageRead(objectIds)[0];
    }
    catch (error) {
        return error;
    }
    return JSON.stringify({ result: result });
};
