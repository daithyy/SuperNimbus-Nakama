let ServerValidate: nkruntime.RpcFunction = function (
  ctx: nkruntime.Context,
  logger: nkruntime.Logger,
  nk: nkruntime.Nakama,
  payload: string
): string {
  logger.info("payload %q", payload);

  if (ctx.userId) {
    // Reject non server-to-server call
    throw Error("Cannot invoke this function from user session!");
  }

  type Token = {
    userId: string;
    matchId: string;
  };

  const request: Token = JSON.parse(payload);
  const collectionName = "matchToken";

  let objectIds: nkruntime.StorageReadRequest[] = [
    {
      collection: collectionName,
      key: request.matchId,
      userId: request.userId,
    },
  ];

  let result: nkruntime.StorageObject | null = null;
  try {
    result = nk.storageRead(objectIds)[0];
  } catch (error) {
    return error as string;
  }

  return JSON.stringify({ result });
};
