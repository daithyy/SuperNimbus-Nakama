"use strict";
var InitModule = function (ctx, logger, nk, initializer) {
    initializer.registerRpc("healthcheck", RpcHealthCheck);
    logger.info("JavaScript module loaded");
};
var RpcHealthCheck = function (ctx, logger, nk, payload) {
    logger.info("Healthcheck RPC called");
    return JSON.stringify({ success: true });
};
