/**
 * 将逗号分隔的字符串转换为数组，并去除每个元素前后的空格。
 * @param {string} str - 逗号分隔的字符串
 * @returns {string[]} - 去除空格后的字符串数组
 */
function StringToArray(str) {
  // 检查 str 是否为 undefined 或者不是字符串类型
  if (typeof str !== 'string' || str === undefined) {
    return [] // 如果 str 是 undefined 或者不是字符串，返回空数组
  }

  // 使用 split 方法将字符串按逗号分割
  const items = str.split(',')

  // 使用 map 方法去除每个元素前后的空格，并且过滤掉空字符串
  const newItems = items.map((item) => item.trim()).filter((item) => item !== '')

  return newItems
}

// 判断对象属性是否变化（浅层比较）
function isObjectEqual(defaultObj, currentObj) {
  // 定义需要比较的属性列表
  const properties = ['top', 'temperature', 'max_tokens'] // 根据你的实际属性进行修改

  for (const prop of properties) {
    if (defaultObj[prop] !== currentObj[prop]) {
      return false
    }
  }
  return true
}

// 提取html5代码
function convertHTML(htmlString) {
  // 定义正则表达式来匹配从 <!DOCTYPE html> 到 </html> 的所有内容
  const fullHTMLRegex = /<!DOCTYPE html>[\s\S]*?<\/html>/i

  // 使用正则表达式提取 <html> 和 </html> 之间的内容
  const match = htmlString.match(fullHTMLRegex)

  // 如果没有找到匹配的内容，则返回空字符串或提示信息
  if (!match) {
    return '' // 或者你可以抛出错误或返回其他默认值
  }

  // 获取匹配到的内容
  let content = match[0]

  // 使用正则表达式移除 <script> 标签及其内容
  // content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')

  return content
}
const result6 = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UI Designer Resume</title>
  <!-- 引入React和ReactDOM 17 -->
  <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
  <script src="https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/babel-standalone/6.26.0/babel.min.js"></script>
  <!-- 引入Bootstrap图标 -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css">
  <!-- 引入Tailwind CSS -->
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <style>
    .resume-card {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 600px;
      width: 100%;
      margin: 30px auto;
    }
  </style>
</head>
<body>
  <div class="resume-card">
    <div id="root" class="card"></div>
  </div>
  <script type="text/babel">
    function App() {
      const resumeData = {
        name: "小格",
        title: "高级UI设计师",
        contact: {
          phone: "+86 123 4567 8901",
          email: "xiaoge@example.com"
        },
        summary: "注重用户体验，追求简洁而不失创意的设计风格...",
        experience: [
          {
            title: "高级UI设计师",
            company: "光影互动科技有限公司",
            period: "202X年 - 至今",
            responsibilities: [
              "负责公司产品的界面设计与用户体验优化",
              "参与用户研究，确保设计方案符合目标用户需求"
            ],
            projects: [
              {
                name: "智能家居应用",
                description: "设计了一款简洁易用的智能家居控制应用，获得了用户好评"
              },
              {
                name: "在线购物平台",
                description: "重新设计了购物车和结算流程，提高了转化率15%"
              }
            ]
          },
          {
            title: "UI/UX设计师",
            company: "创想数字工作室",
            period: "20XX年 - 202X年",
            responsibilities: [
              "从事Web和移动应用的界面设计，注重细节处理，确保产品美观且功能性强"
            ],
            projects: [
              {
                name: "教育类APP",
                description: "为一款面向青少年的学习软件创建了友好的交互界面，增加了用户的活跃度"
              },
              {
                name: "企业官网改版",
                description: "对公司的官方网站进行了全面的设计更新，提升了品牌形象"
              }
            ]
          }
        ],
        education: [
          {
            degree: "学士学位",
            school: "XX艺术学院",
            major: "视觉传达设计",
            period: "202X年"
          }
        ],
        skills: [
          { name: "Sketch", level: 5 },
          { name: "Adobe XD", level: 5 },
          { name: "Figma", level: 5 },
          { name: "Photoshop", level: 5 },
          { name: "Illustrator", level: 5 },
          { name: "After Effects", level: 4 },
          { name: "HTML/CSS", level: 3 },
          { name: "JavaScript", level: 2 }
        ],
        achievements: [
          "获得“年度最佳设计奖”（光影互动科技有限公司，202X年）",
          "Adobe Certified Expert (ACE) in UX Design",
          "多次参加国内外设计展览，并有作品被收录于知名设计杂志"
        ]
      };
      // 头像地址链接
      const imageUrl = 'https://ww4.sinaimg.cn/mw690/006cSBLKly1greqe1xbkvj60j60hzwgh02.jpg';
      return (
        <div className="w-[595px] h-[842px] bg-gradient-to-br from-purple-50 to-blue-50 text-xs leading-relaxed overflow-hidden flex rounded-lg shadow-md">
          {/* 左侧栏 */}
          <div className="w-[220px] bg-gradient-to-b from-purple-100 to-blue-100 p-4 rounded-l-lg flex flex-col">
            {/* 头像和基本信息 */}
            <div className="bg-gradient-to-br from-purple-700 to-purple-400 text-white p-4 rounded-lg mb-4 overflow-hidden">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full shadow-lg">
                <img className="rounded-full" src={imageUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h1 className="text-lg font-bold text-center mb-1">{resumeData.name}</h1>
              <p className="text-center mb-2">{resumeData.title}</p>
              <div className="text-xs space-y-1">
                <div className="flex items-center mb-1 space-x-1">
                  <i className="bi bi-envelope-fill text-xs"></i>
                  <span className="truncate">{resumeData.contact.email}</span>
                </div>
                <div className="flex items-center mb-1 space-x-1">
                  <i className="bi bi-telephone-fill text-xs"></i>
                  <span>{resumeData.contact.phone}</span>
                </div>
              </div>
            </div>
            {/* 技能专长 */}
            <div className="bg-white bg-opacity-80 p-3 rounded-lg mb-4 flex-1 shadow">
              <h2 className="text-sm font-bold text-purple-700 mb-2 pb-1 border-b border-purple-200 flex items-center">
                <i className="bi bi-star-fill text-base mr-1"></i>
                技能专长
              </h2>
              {resumeData.skills.map((skill, index) => (
                <div key={index} className="flex items-center mb-1">
                  <span className="flex-1 text-xs truncate text-gray-800">{skill.name}</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i
                        key={star}
                        className={\`bi bi-star-fill text-xs \${star <= skill.level ? 'text-purple-600' : 'text-gray-300'}\`}
                      ></i>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* 成就与奖项 */}
            <div className="bg-white bg-opacity-80 p-3 rounded-lg flex-1 shadow">
              <h2 className="text-sm font-bold text-purple-700 mb-2 pb-1 border-b border-purple-200 flex items-center">
                <i className="bi bi-trophy-fill text-base mr-1"></i>
                成就与奖项
              </h2>
              {resumeData.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start mb-1 text-xs text-gray-800">
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          </div>
          {/* 右侧栏 */}
          <div className="flex-1 p-4 bg-white bg-opacity-90 rounded-r-lg flex flex-col">
            {/* 个人简介 */}
            <div className="bg-purple-100 p-3 rounded-lg mb-4 shadow text-xs text-gray-800">
              <h2 className="text-sm font-bold text-purple-700 mb-2 pb-1 border-b border-purple-200 flex items-center">
                <i className="bi bi-person-fill text-base mr-1"></i>
                个人简介
              </h2>
              <p>{resumeData.summary}</p>
            </div>
            {/* 教育背景 */}
            <div className="bg-purple-100 p-3 rounded-lg mb-4 shadow">
              <h2 className="text-sm font-bold text-purple-700 mb-2 pb-1 border-b border-purple-200 flex items-center">
                <i className="bi bi-mortarboard-fill text-base mr-1"></i>
                教育背景
              </h2>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="mb-2">
                  <h3 className="text-xs font-bold text-purple-700">{edu.degree} - {edu.school}</h3>
                  <p className="text-xs text-gray-600">{edu.major}</p>
                  <p className="text-xs text-gray-600">{edu.period}</p>
                </div>
              ))}
            </div>
            {/* 工作经历 */}
            <div className="bg-purple-100 p-3 rounded-lg flex-1 shadow">
              <h2 className="text-sm font-bold text-purple-700 mb-2 pb-1 border-b border-purple-200 flex items-center">
                <i className="bi bi-briefcase-fill text-base mr-1"></i>
                工作经历
              </h2>
              {resumeData.experience.map((job, index) => (
                <div key={index} className="mb-3">
                  <h3 className="text-xs font-bold text-purple-700">{job.title} - {job.company}</h3>
                  <p className="text-xs text-gray-600 mb-1">{job.period}</p>
                  <ul className="list-none pl-0 m-0 space-y-1">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-xs text-gray-800 pl-2 relative">
                        <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-purple-700 rounded-full"></span>
                        {resp}
                      </li>
                    ))}
                    {job.projects.map((project, idx) => (
                      <li key={idx} className="text-xs text-gray-800 pl-2 relative">
                        <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-purple-700 rounded-full"></span>
                        <strong>{project.name}:</strong> {project.description}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    ReactDOM.render(<App />, document.getElementById("root"));
      
  </script>
</body>

</html>`
export { StringToArray, isObjectEqual, convertHTML, result6 }
