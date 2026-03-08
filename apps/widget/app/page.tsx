"use client";

import { useVapi } from "@/modules/widget/hooks/use-vapi";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  const {
    startCall,
    endCall,
    isConnecting,
    isConnected,
    isSpeaking,
    transcript,
  } = useVapi();

  return (
    <div className="flex flex-col items-center justify-center min-h-svh gap-4">
      <div className="flex gap-4">
        <Button
          onClick={() => {
            startCall();
          }}
        >
          Start Call
        </Button>

        <Button
          onClick={() => {
            endCall();
          }}
          variant="destructive"
        >
          End Call
        </Button>
      </div>

      <p>isConnecting: {`${isConnecting}`}</p>
      <p>isConnected: {`${isConnected}`}</p>
      <p>isSpeaking: {`${isSpeaking}`}</p>
      <p>Transcript: {JSON.stringify(transcript, null, 2)}</p>
    </div>
  );
}
