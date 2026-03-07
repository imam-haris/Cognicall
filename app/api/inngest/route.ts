import { serve } from "inngest/next";
import { inngest } from "@/inngest/client";
import { meetingProcedure } from "@/inngest/functions";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    meetingProcedure
    /* your functions will be passed here later! */
  ],
});