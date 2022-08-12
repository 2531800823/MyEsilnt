module.exports = {
  header: "CHANGELOG ",
  types: [
    { type: 'feat', section: '✨Features | 新功能' },
    { type: 'fix', section: '🐛 Bug Fixes | Bug 修复' },
    { type: 'init', section: '🎉 Init | 初始化' },
    { type: 'docs', section: '✏️ Documentation | 文档' },
    { type: 'style', section: '💄 Styles | 风格' },
    { type: 'refactor', section: '♻️ Code Refactoring | 代码重构' },
    { type: 'perf', section: '⚡ Performance Improvements | 性能优化' },
    { type: 'test', section: '✅ Tests | 测试' },
    { type: 'revert', section: '⏪ Revert | 回退' },
    { type: 'build', section: '📦‍ Build System | 打包构建' },
    { type: 'chore', section: '🚀 Chore | 构建/工程依赖/配置' },
    { type: 'ci', section: '👷 Continuous Integration | CI 部署' }
  ],
  "issueUrlFormat": {
    "type": "string",
    "description": "A URL representing the issue format (allowing a different URL format to be swapped in for Gitlab, Bitbucket, etc).",
    "default": "{{host}}/{{owner}}/{{repository}}/issues/{{id}}"
  }
}


