import { RpcHealthCheck } from "./healthcheck";
import { ReadFile } from "./readfile";
import { ServerValidate } from "./servervalidate";

function InitModule(
  ctx: nkruntime.Context,
  logger: nkruntime.Logger,
  nk: nkruntime.Nakama,
  initializer: nkruntime.Initializer
) {
  initializer.registerRpc("healthcheck", RpcHealthCheck);
  initializer.registerRpc("servervalidate", ServerValidate);
  initializer.registerRpc("readfile", ReadFile);
  logger.info("JavaScript module loaded");
}

!InitModule && InitModule.bind(null);
