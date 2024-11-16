
const Activity = () => (
  <section className="p-6 bg-gray-900 text-white">
    <h2 className="text-2xl font-bold mb-6">Activity</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="activity-card">
        <img src="" alt="/images/hackathon.jpeg" className="mb-4" />
        <h3 className="text-lg font-bold">SIH</h3>
        <p className="text-gray-400">Details about Smart India Hackathon.</p>
      </div>
      <div className="activity-card">
        <img src="" alt="/images/contest.jpeg" className="mb-4" />
        <h3 className="text-lg font-bold">Coding contest</h3>
        <p className="text-gray-400">coding contest</p>
      </div>
    </div>
  </section>
);

export default Activity;