import fs from "fs";

export function ReadFile(
  ctx: nkruntime.Context,
  logger: nkruntime.Logger,
  nk: nkruntime.Nakama,
  path: string
): string {
  fs.readFile(path, (err, data) => {
    if (err) {
      logger.error(err.message);

      throw err;
    }

    logger.info(data.toString());

    return JSON.stringify({ data });
  });

  return "";
}
