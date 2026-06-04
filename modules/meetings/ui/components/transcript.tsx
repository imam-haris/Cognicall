import { useTRPC } from "@/trpc/client"
import { useQuery } from "@tanstack/react-query";

interface Props {
    meetingId: string
}
export const Transcript = ({meetingId}: Props)=>{
    const trpc = useTRPC();
    const { data } = useQuery(trpc.meetings.getTranscript.queryOptions({ id: meetingId}))
     
}