export const ProfileContainer = ({ children }) => {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between">
        {children}
      </div>
    </div>
  );
}
