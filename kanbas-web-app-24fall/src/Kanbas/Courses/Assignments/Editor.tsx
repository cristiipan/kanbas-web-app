import { useParams } from 'react-router-dom';

export default function AssignmentEditor() {
  const { assignmentId } = useParams();

  return (
    <div id="wd-assignments-editor">
      <h1>Assignment Editor</h1>
      <p>Editing assignment: {assignmentId}</p>

      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value={`Assignment ${assignmentId}`} /><br /><br />

      <textarea id="wd-description" rows={4} cols={50}>
        This is the description for assignment {assignmentId}.
      </textarea>
      <br /><br />

      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" type="number" value={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>EXAMS</option>
                <option>PROJECT</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option>Percentage</option>
                <option>Points</option>
                <option>Letter Grade</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option>Online</option>
                <option>On Paper</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              Online Entry Options
            </td>
            <td>
              <input type="checkbox" id="wd-text-entry" /> Text Entry <br />
              <input type="checkbox" id="wd-website-url" /> Website URL <br />
              <input type="checkbox" id="wd-media-recordings" /> Media Recordings <br />
              <input type="checkbox" id="wd-student-annotation" /> Student Annotation <br />
              <input type="checkbox" id="wd-file-upload" /> File Upload
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
              <input id="wd-assign-to" value="Everyone" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input id="wd-due-date" type="date" value="2024-05-13" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input id="wd-available-from" type="date" value="2024-05-06" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Until</label>
            </td>
            <td>
              <input id="wd-available-until" type="date" value="2024-05-20" />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <button>Cancel</button>
      <button>Save</button>
    </div>
  );
}