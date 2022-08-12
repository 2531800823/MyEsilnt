module.exports = {
  header: "CHANGELOG ！！",
  types: [
    { type: 'feat', section: '✨Features | 新功能' + "{{owner}}", Substitutions: true },
    { type: 'fix', section: '🐛 Bug Fixes | Bug 修复' + "{{owner}}" },
    { type: 'init', section: '🎉 Init | 初始化' + "{{owner}}" },
    { type: 'docs', section: '✏️ Documentation | 文档' + "{{owner}}" },
    { type: 'style', section: '💄 Styles | 风格' + "{{owner}}" },
    { type: 'refactor', section: '♻️ Code Refactoring | 代码重构' + "{{owner}}" },
    { type: 'perf', section: '⚡ Performance Improvements | 性能优化' + "{{owner}}" },
    { type: 'test', section: '✅ Tests | 测试' + "{{owner}}" },
    { type: 'revert', section: '⏪ Revert | 回退' + "{{owner}}" },
    { type: 'build', section: '📦‍ Build System | 打包构建' + "{{owner}}" },
    { type: 'chore', section: '🚀 Chore | 构建/工程依赖/配置' + "{{owner}}" },
    { type: 'ci', section: '👷 Continuous Integration | CI 部署' + "{{owner}}" }
  ]
}


