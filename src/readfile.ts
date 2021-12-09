import fs from "fs";

export function ReadFile(
  ctx: nkruntime.Context,
  logger: nkruntime.Logger,
  nk: nkruntime.Nakama,
  pathObj: any
): string {
  logger.info("path %q", pathObj);

  type MyPath = {
    path: string;
  };

  const request: MyPath = JSON.parse(pathObj);

  let data = fs.readFileSync(request.path);

  logger.info(data.toString());

  return JSON.stringify({ data });
}
