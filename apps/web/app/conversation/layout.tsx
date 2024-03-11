import ConversationList from "@/components/conversation-list";

export default function ConversationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full">
      <ConversationList />
      {children}
    </div>
  );
}
