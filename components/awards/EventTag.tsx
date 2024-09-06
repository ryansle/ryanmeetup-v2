type EventTagProps = {
  event: string;
};

const EventTag = (props: EventTagProps) => {
  const { event } = props;

  const renderTagStyles = (event: string) => {
    switch (event) {
      case 'Ryan Roundup':
        return 'border-red-500';
      case 'Ryan Rendezvous':
        return 'border-yellow-400 dark:border-yellow-200';
      case 'Ryan Retreat':
        return 'border-orange-500';
      case 'Ryan Rave':
        return 'border-purple-700';
      case 'Rytoberfest':
        return 'border-blue-500';
      case 'Ryan Claus':
        return 'border-green-800';
      case 'Ryan Rodeo':
        return 'border-amber-900';
      case 'St. Ryan\'s Day':
        return 'border-green-500';
      case 'Ryami Vice':
        return 'border-pink-600';
      case 'Ryan Red Carpet':
        return 'border-[#EE1A25]';
      case 'Ryan Royale':
        return 'border-[#502780]';
      case 'Ryan\'s Game Show':
        return 'border-[#4AA1A1]';
      default:
        return 'border-gray-700 text-black dark:text-white';
    }
  };

  return (
    <div className={`${renderTagStyles(event)} border text-xs p-1 rounded mb-1 font-semibold text-black bg-white dark:bg-black dark:text-white shadow-lg`}>
      {event}
    </div>
  );
};

export { EventTag };
