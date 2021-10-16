let RpcHealthCheck = function (
  ctx: nkruntime.Context,
  logger: nkruntime.Logger,
  nk: nkruntime.Nakama,
  payload: string
): string {
  logger.info("Healthcheck RPC called");
  return JSON.stringify({ success: true });
};
