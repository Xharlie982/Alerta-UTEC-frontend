import type { ChatMessage as ChatMessageType } from '../../types/incidentes';

interface ChatMessageProps {
  message: ChatMessageType;
  isOwn: boolean;
  senderName: string;
}

export function ChatMessage({ message, isOwn, senderName }: ChatMessageProps) {
  const formatTime = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleTimeString('es-PE', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[70%] rounded-lg px-4 py-2 ${
          isOwn ? 'rounded-br-none' : 'rounded-bl-none'
        }`}
        style={{
          backgroundColor: isOwn ? '#4a5a40' : '#e5e7eb',
          color: isOwn ? '#ffffff' : '#333333',
        }}
      >
        {!isOwn && (
          <p className="text-xs font-medium mb-1" style={{ color: '#666666' }}>
            {senderName}
          </p>
        )}
        <p className="text-sm whitespace-pre-wrap break-words">{message.mensaje}</p>
        <p
          className="text-xs mt-1"
          style={{ color: isOwn ? 'rgba(255, 255, 255, 0.7)' : '#666666' }}
        >
          {formatTime(message.timestamp)}
        </p>
      </div>
    </div>
  );
}

