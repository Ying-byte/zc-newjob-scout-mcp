#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "newjob",
  boardId: "newjob-official",
  domain: "newjob.tech",
  npmName: "zc-newjob-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
