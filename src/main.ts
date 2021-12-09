import { RpcHealthCheck } from "./healthcheck";
import { ServerValidate } from "./servervalidate";
import { ReadFile } from "./readfile";

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
