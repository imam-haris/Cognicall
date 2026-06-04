import { StreamClient } from "@stream-io/node-sdk";
import "dotenv/config";

const streamVideo = new StreamClient(
    process.env.NEXT_PUBLIC_STREAM_VIDEO_API_KEY,
    process.env.STREAM_VIDEO_SECRET_KEY
);

async function test() {
    console.log("Upserting agent user...");
    await streamVideo.upsertUsers([
        {
            id: "test-agent-123",
            name: "Test Agent",
            role: "admin",
        }
    ]);

    console.log("Connecting OpenAI...");
    const call = streamVideo.video.call("default", "test-meeting-123");
    await call.getOrCreate({ data: { created_by_id: "test-agent-123" } });

    try {
        const realtimeClient = await streamVideo.video.connectOpenAi({
            call,
            // openAiApiKey: process.env.OPENAI_API_KEY,
            agentUserId: "test-agent-123",
        });
        console.log("Success!");
    } catch (error) {
        console.error("Error:", JSON.stringify(error, null, 2));
    }
}
test();
