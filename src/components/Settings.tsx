export default function Settings() {
  return (
    <form className="settings">
      <label>
        Focus Time (minutes)
        <input type="number" min="1" />
      </label>
      <label>
        Break Time (minutes)
        <input type="number" min="1" />
      </label>
      <button className="btn">Save</button>
    </form>
  )
}
