let InitModule: nkruntime.InitModule = function (
  ctx: nkruntime.Context,
  logger: nkruntime.Logger,
  nk: nkruntime.Nakama,
  initializer: nkruntime.Initializer
) {
  initializer.registerRpc("healthcheck", RpcHealthCheck);
  initializer.registerRpc("servervalidate", ServerValidate);
  logger.info("JavaScript module loaded");
};
