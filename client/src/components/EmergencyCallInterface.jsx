import * as React from 'react';
import { Volume2, PhoneOff, Mic, MicOff, Phone } from 'lucide-react';
import CircleButton from './CircleButton';
import EmergencyCallStatus from './EmergencyCallStatus';

function EmergencyCallInterface({ onClose }) {
  const [isMuted, setIsMuted] = React.useState(false);
  const [callStatus, setCallStatus] = React.useState('ringing'); // "ringing", "connected", "ended"
  const [callDuration, setCallDuration] = React.useState(0); // Duration in seconds
  const timerRef = React.useRef(null); // Ref to store the interval ID

  // Simulate call connection after 3 seconds (for demonstration)
  React.useEffect(() => {
    if (callStatus === 'ringing') {
      const timeoutId = setTimeout(() => {
        setCallStatus('connected');
        startTimer();
      }, 3000); // Simulate call connection after 3 seconds

      return () => clearTimeout(timeoutId);
    }
  }, [callStatus]);

  // Start the timer when the call is connected
  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCallDuration((prevDuration) => prevDuration + 1);
    }, 1000);
  };

  // Stop the timer when the call ends
  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // Handle call end
  const handleEndCall = () => {
    setCallStatus('ended');
    stopTimer();
    alert('Call ended');
  };

  // Format the call duration into MM:SS format
  const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const controlButtons = [
    {
      size: 'w-10 h-10',
      color: 'bg-zinc-300',
      icon: <Volume2 size={16} />,
      onClick: () => alert('Loudspeaker activated'),
      ariaLabel: 'Loudspeaker',
    },
    {
      size: 'w-14 h-14',
      color: 'bg-red-600',
      icon: <PhoneOff size={20} />,
      onClick: handleEndCall,
      ariaLabel: 'End Call',
    },
    {
      size: 'w-10 h-10',
      color: 'bg-zinc-300',
      icon: isMuted ? <MicOff size={16} /> : <Mic size={16} />,
      onClick: () => setIsMuted(!isMuted),
      ariaLabel: isMuted ? 'Unmute' : 'Mute',
    },
  ];

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-20 bg-white rounded-3xl max-w-[543px] max-md:px-5 transition-transform transform scale-100">
        <div className="flex flex-col justify-center max-w-full w-[190px]">
          <div className="flex flex-col self-center max-w-full w-[150px]">
            <div className="flex flex-col justify-center w-full">
              <div className="flex gap-2.5 items-center self-center px-1 py-1.5 w-10 h-10 rounded-2xl bg-zinc-50 min-h-[40px]">
                <Phone size={30} className="text-green-500" />
              </div>
              <EmergencyCallStatus />
            </div>
            <div className="flex gap-1.5 items-end self-center mt-7 text-xs tracking-tighter text-black whitespace-nowrap">
              {callStatus === 'ringing' && <div>Ringing...</div>}
              {callStatus === 'connected' && <div>{formatDuration(callDuration)}</div>}
              {callStatus === 'ended' && <div>Call Ended</div>}
            </div>
          </div>
          <div className="flex gap-6 justify-center items-center mt-36 w-full max-md:mt-10">
            {controlButtons.map((button, index) => (
              <CircleButton
                key={index}
                size={button.size}
                color={button.color}
                icon={button.icon}
                onClick={button.onClick}
                aria-label={button.ariaLabel}
              />
            ))}
          </div>
          <button
            onClick={onClose}
            className="mt-5 text-xs text-white bg-black px-4 py-2 rounded-full"
            aria-label="Close Emergency Interface"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmergencyCallInterface;