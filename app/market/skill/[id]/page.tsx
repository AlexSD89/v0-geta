"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowLeft, 
  Star, 
  GitFork, 
  Eye, 
  Heart, 
  Share2, 
  Download, 
  Code2,
  FileText,
  Folder,
  CheckCircle2,
  TrendingUp,
  Users,
  Clock
} from "lucide-react"
import { useState } from "react"

export default function SkillDetailPage({ params }: { params: { id: string } }) {
  const [isLiked, setIsLiked] = useState(false)
  const [isForkDialogOpen, setIsForkDialogOpen] = useState(false)

  // Mock data - 实际应该从 API 获取
  const skill = {
    id: params.id,
    name: "PDF 智能解析",
    description: "支持表格、图片、多语言识别的专业 PDF 解析工具",
    longDescription: `这是一个功能强大的 PDF 解析 Skill，能够智能识别和提取 PDF 文档中的各种元素，包括文本、表格、图片等。支持多语言识别，准确率高达 98%。

特别适用于财务报表、法律文件、研究论文等专业文档的批量处理场景。`,
    author: {
      name: "张三",
      avatar: "👨‍💻",
      bio: "专注于文档处理和 AI 工具开发",
      skillsCount: 12,
      followers: 2400
    },
    category: "数据分析",
    version: "2.3.1",
    license: "MIT",
    rating: 4.9,
    reviews: 2000,
    forks: 1200,
    stars: 3800,
    views: 15000,
    downloads: 8500,
    createdAt: "2024-01-15",
    updatedAt: "2024-02-01",
    tags: ["PDF", "OCR", "表格识别", "多语言", "批量处理"],
    pricing: {
      type: "free", // free, paid, freemium
      price: 0
    },
    // Skill 文件结构
    structure: [
      { type: "file", name: "SKILL.md", size: "3.2 KB" },
      { type: "folder", name: "scripts", files: ["parse.py", "extract_tables.py"] },
      { type: "folder", name: "references", files: ["guide.md", "examples.md"] },
      { type: "folder", name: "assets", files: ["template.docx"] }
    ],
    // 使用方法
    installation: {
      claude: `# 在 Claude Code 中安装
gate install pdf-parser`,
      cursor: `# 在 Cursor 中安装  
npx gate add pdf-parser`,
      terminal: `# 通过命令行安装
curl -sSL https://gate.ai/install/pdf-parser | sh`
    },
    // 示例代码
    example: `# 使用示例
from gate import skills

# 加载 PDF 解析 Skill
pdf_parser = skills.load("pdf-parser")

# 解析 PDF 文件
result = pdf_parser.parse("contract.pdf", 
  extract_tables=True,
  ocr=True,
  language="zh"
)

print(result.text)
print(result.tables)`
  }

  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <Navigation />
      
      {/* Header with Back Button */}
      <section className="pt-24 pb-6 px-4 sm:px-6 bg-white border-b border-[#d2d2d7]/30">
        <div className="max-w-6xl mx-auto">
          <Button 
            variant="ghost" 
            size="sm" 
            className="mb-4 -ml-2 text-[#0071e3] hover:text-[#0051a3] hover:bg-[#0071e3]/10"
            asChild
          >
            <a href="/market">
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              返回市场
            </a>
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Main Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Title & Meta */}
              <div className="bg-white rounded-2xl p-6 border border-[#d2d2d7]/50">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-2xl font-bold">
                        {skill.name[0]}
                      </div>
                      <div className="flex-1">
                        <h1 className="text-3xl font-bold text-[#1d1d1f] mb-1">{skill.name}</h1>
                        <p className="text-[#86868b]">{skill.description}</p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {skill.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-[#f5f5f7] text-[#1d1d1f] border-0">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-6 text-sm text-[#86868b]">
                      <div className="flex items-center gap-1.5">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-medium text-[#1d1d1f]">{skill.rating}</span>
                        <span>({skill.reviews.toLocaleString()})</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <GitFork className="w-4 h-4" />
                        <span>{skill.forks.toLocaleString()} Forks</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Eye className="w-4 h-4" />
                        <span>{skill.views.toLocaleString()} 浏览</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Download className="w-4 h-4" />
                        <span>{skill.downloads.toLocaleString()} 安装</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#d2d2d7]/30">
                  <Button 
                    size="lg"
                    className="flex-1 h-12 rounded-xl bg-[#ff6b4a] hover:bg-[#ff5a39] text-white font-medium"
                    onClick={() => setIsForkDialogOpen(true)}
                  >
                    <GitFork className="w-4 h-4 mr-2" />
                    Fork 到我的空间
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-6 rounded-xl border-2 border-[#1d1d1f] bg-transparent hover:bg-[#1d1d1f] hover:text-white"
                    onClick={() => setIsLiked(!isLiked)}
                  >
                    <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-6 rounded-xl border-2 border-[#1d1d1f] bg-transparent hover:bg-[#1d1d1f] hover:text-white"
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-2xl p-6 border border-[#d2d2d7]/50">
                <h2 className="text-xl font-bold text-[#1d1d1f] mb-4">详细介绍</h2>
                <div className="prose prose-sm max-w-none text-[#1d1d1f] leading-relaxed whitespace-pre-line">
                  {skill.longDescription}
                </div>
              </div>

              {/* File Structure */}
              <div className="bg-white rounded-2xl p-6 border border-[#d2d2d7]/50">
                <h2 className="text-xl font-bold text-[#1d1d1f] mb-4">文件结构</h2>
                <div className="space-y-2">
                  {skill.structure.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f5f5f7] transition-colors">
                      {item.type === "file" ? (
                        <FileText className="w-5 h-5 text-[#0071e3]" />
                      ) : (
                        <Folder className="w-5 h-5 text-[#ffb84a]" />
                      )}
                      <div className="flex-1">
                        <div className="font-medium text-[#1d1d1f]">{item.name}</div>
                        {item.files && (
                          <div className="text-sm text-[#86868b]">
                            {item.files.join(", ")}
                          </div>
                        )}
                      </div>
                      {item.size && (
                        <span className="text-xs text-[#86868b]">{item.size}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Installation */}
              <div className="bg-white rounded-2xl p-6 border border-[#d2d2d7]/50">
                <h2 className="text-xl font-bold text-[#1d1d1f] mb-4">安装方法</h2>
                
                <div className="space-y-4">
                  {/* Claude Code */}
                  <div>
                    <div className="text-sm font-medium text-[#1d1d1f] mb-2">Claude Code</div>
                    <div className="bg-[#1d1d1f] rounded-xl p-4">
                      <pre className="text-sm text-white font-mono">{skill.installation.claude}</pre>
                    </div>
                  </div>

                  {/* Cursor */}
                  <div>
                    <div className="text-sm font-medium text-[#1d1d1f] mb-2">Cursor</div>
                    <div className="bg-[#1d1d1f] rounded-xl p-4">
                      <pre className="text-sm text-white font-mono">{skill.installation.cursor}</pre>
                    </div>
                  </div>

                  {/* Terminal */}
                  <div>
                    <div className="text-sm font-medium text-[#1d1d1f] mb-2">Terminal & IDE</div>
                    <div className="bg-[#1d1d1f] rounded-xl p-4">
                      <pre className="text-sm text-white font-mono">{skill.installation.terminal}</pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Example Code */}
              <div className="bg-white rounded-2xl p-6 border border-[#d2d2d7]/50">
                <h2 className="text-xl font-bold text-[#1d1d1f] mb-4">使用示例</h2>
                <div className="bg-[#1d1d1f] rounded-xl p-4">
                  <pre className="text-sm text-white font-mono leading-relaxed">{skill.example}</pre>
                </div>
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="space-y-6">
              {/* Author Card */}
              <div className="bg-white rounded-2xl p-6 border border-[#d2d2d7]/50">
                <h3 className="text-sm font-semibold text-[#86868b] uppercase tracking-wider mb-4">
                  作者
                </h3>
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-2xl">
                    {skill.author.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-[#1d1d1f]">{skill.author.name}</div>
                    <div className="text-sm text-[#86868b]">{skill.author.bio}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-[#86868b] mb-4">
                  <div>
                    <span className="font-medium text-[#1d1d1f]">{skill.author.skillsCount}</span> Skills
                  </div>
                  <div>
                    <span className="font-medium text-[#1d1d1f]">{skill.author.followers}</span> 关注者
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full h-10 rounded-xl border-2 border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white bg-transparent"
                >
                  <Users className="w-4 h-4 mr-2" />
                  关注作者
                </Button>
              </div>

              {/* Meta Info */}
              <div className="bg-white rounded-2xl p-6 border border-[#d2d2d7]/50">
                <h3 className="text-sm font-semibold text-[#86868b] uppercase tracking-wider mb-4">
                  信息
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[#86868b]">分类</span>
                    <Badge variant="secondary" className="bg-[#f5f5f7] text-[#1d1d1f]">
                      {skill.category}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#86868b]">版本</span>
                    <span className="font-mono text-[#1d1d1f]">{skill.version}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#86868b]">许可证</span>
                    <span className="text-[#1d1d1f]">{skill.license}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#86868b]">创建时间</span>
                    <span className="text-[#1d1d1f]">{skill.createdAt}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#86868b]">最后更新</span>
                    <span className="text-[#1d1d1f]">{skill.updatedAt}</span>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-gradient-to-br from-[#fff5f2] to-[#ffe8e0] rounded-2xl p-6 border-2 border-[#ffd4c8]">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-[#ff6b4a]" />
                  <h3 className="font-semibold text-[#1d1d1f]">免费使用</h3>
                </div>
                <p className="text-sm text-[#86868b] mb-4">
                  该 Skill 完全免费，Fork 后即可立即使用
                </p>
                <Button 
                  className="w-full h-10 rounded-xl bg-[#ff6b4a] hover:bg-[#ff5a39] text-white"
                  onClick={() => setIsForkDialogOpen(true)}
                >
                  立即 Fork
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fork Dialog (Simple) */}
      {isForkDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-[#1d1d1f] mb-4">Fork 到我的空间</h3>
            <p className="text-[#86868b] mb-6">
              Fork 后，这个 Skill 将被复制到你的个人空间，你可以自由修改和使用。
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 h-10 rounded-xl bg-transparent"
                onClick={() => setIsForkDialogOpen(false)}
              >
                取消
              </Button>
              <Button
                className="flex-1 h-10 rounded-xl bg-[#ff6b4a] hover:bg-[#ff5a39] text-white"
                onClick={() => {
                  alert("Fork 成功！已添加到你的空间")
                  setIsForkDialogOpen(false)
                }}
              >
                确认 Fork
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
