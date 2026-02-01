export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Skill 市场</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/solutions-market" className="hover:text-foreground transition-colors">
                  浏览 Skills
                </a>
              </li>
              <li>
                <a href="/marketplace" className="hover:text-foreground transition-colors">
                  工具集成
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-foreground transition-colors">
                  定价
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">创作者</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/creator-studio" className="hover:text-foreground transition-colors">
                  创作者工作室
                </a>
              </li>
              <li>
                <a href="/docs/upload-skill" className="hover:text-foreground transition-colors">
                  上传 Skill
                </a>
              </li>
              <li>
                <a href="/docs/affiliate" className="hover:text-foreground transition-colors">
                  分销中心
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">资源</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/tutorial" className="hover:text-foreground transition-colors">
                  快速上手
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-foreground transition-colors">
                  常见问题
                </a>
              </li>
              <li>
                <a href="/docs/api" className="hover:text-foreground transition-colors">
                  API 文档
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">企业与支持</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/solutions/enterprise" className="hover:text-foreground transition-colors">
                  企业解决方案
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-foreground transition-colors">
                  联系我们
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">G</span>
            </div>
            <span className="font-semibold text-xl">Gate</span>
          </div>

          <p className="text-sm text-muted-foreground">© 2026 Gate OS by LaunchX. The Ultimate AI Skill Exchange.</p>
        </div>
      </div>
    </footer>
  )
}
