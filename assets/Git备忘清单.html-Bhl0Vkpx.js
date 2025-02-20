import{_ as t,r as s,c as l,o as r,b as e,f as c,a as n,d as a,e as d}from"./app-7eMFvEA8.js";const u={},v=e("h1",{id:"git-备忘清单-git-cheatsheet",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git-备忘清单-git-cheatsheet","aria-hidden":"true"},"#"),a(" Git 备忘清单 & git cheatsheet")],-1),g=e("p",null,[e("img",{src:"https://img-blog.csdnimg.cn/20201125221109860.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1NvcGhpZV9V,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"})],-1),o=e("p",null,"本备忘单总结了常用的 Git 命令行指令，以供快速参考。",-1),m=e("hr",null,null,-1),h={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},b=n(`<h2 id="入门" tabindex="-1"><a class="header-anchor" href="#入门" aria-hidden="true">#</a> 入门</h2><h3 id="创建存储库" tabindex="-1"><a class="header-anchor" href="#创建存储库" aria-hidden="true">#</a> 创建存储库</h3><p>创建一个新的本地存储库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git init [项目名称]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>克隆存储库(代码仓库)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone &lt;git_url&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将存储库克隆到指定目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone &lt;git_url&gt; 指定目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将存储库克隆到指定目录，并指定分支</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone &lt;git_url&gt; -b &lt;分支名称&gt; 指定目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="做出改变" tabindex="-1"><a class="header-anchor" href="#做出改变" aria-hidden="true">#</a> 做出改变</h3><p>在工作目录中<strong>显示</strong>修改后的文件，为您的下一次提交暂存</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>暂存文件，准备提交</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git add [file]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>暂存<strong>所有</strong>更改的文件，准备提交</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git add .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将所有暂存文件提交到版本化历史记录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git commit -m &quot;commit message&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将所有跟踪的文件提交到版本化历史记录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git commit -am &quot;commit message&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>取消暂存文件，保留文件更改</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git reset [file]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将所有内容恢复到最后一次提交</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git reset --hard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>已更改但未暂存内容的差异</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git diff
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>已 commited 但尚未提交的内容的差异</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git diff --staged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在指定分支之前应用当前分支的任何提交</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git rebase [branch]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><p>设置将附加到您的提交和标签的名称</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global user.name &quot;name&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置将附加到您的提交和标签 tags 的<strong>电子邮件地址</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global user.email &quot;email&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启用 Git 输出的一些着色</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global color.ui auto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在文本编辑器中编辑全局配置文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global --edit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示本地 <code>repo</code> 配置设置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除全局设置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global --unset &lt;entry-name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用分支" tabindex="-1"><a class="header-anchor" href="#使用分支" aria-hidden="true">#</a> 使用分支</h3><p>列出所有本地分支</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>列出所有分支，本地和远程</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch -av
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>切换到 <code>my_branch</code>，并更新工作目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout my_branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建一个名为 <code>new_branch</code> 的新分支</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout -b new_branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除名为 <code>my_branch</code> 的分支</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch -d my_branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将分支 <code>A</code> 合并到分支 <code>B</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout branchB
git merge branchA
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>标记当前提交</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git tag my_tag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>从远程分支中创建并切换到本地分支</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout -b &lt;branch-name&gt; origin/&lt;branch-name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="临时提交" tabindex="-1"><a class="header-anchor" href="#临时提交" aria-hidden="true">#</a> 临时提交</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 保存已修改和分阶段的更改
$ git stash
# 列出隐藏文件更改的堆栈顺序
$ git stash list
# 从存储堆栈顶部编写工作
$ git stash pop
# 丢弃存储堆栈顶部的更改
$ git stash drop
# 回到某个 stash 的状态
$ git stash apply &lt;stash@{n}&gt;
# 删除所有的 stash
$ git stash clear
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="观察你的存储库" tabindex="-1"><a class="header-anchor" href="#观察你的存储库" aria-hidden="true">#</a> 观察你的存储库</h3><p>显示当前活动分支的提交历史</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示 branchA 上不在 branchB 上的提交</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git log branchB..branchA
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示更改文件的提交，即使跨重命名</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git log --follow [file]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示 branchA 中的内容与 branchB 中的内容的差异</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git diff branchB...branchA
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以人类可读的格式显示 Git 中的任何对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git show [SHA]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="重构文件名" tabindex="-1"><a class="header-anchor" href="#重构文件名" aria-hidden="true">#</a> 重构文件名</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 从工作目录中删除文件并暂存删除
git rm &lt;filename&gt;

# 从版本控制中删除文件但在本地保留文件
git rm --cached &lt;filename&gt;

# 更改文件名并准备提交
git mv &lt;filename-orig&gt; &lt;filename-renamed&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="同步" tabindex="-1"><a class="header-anchor" href="#同步" aria-hidden="true">#</a> 同步</h3><p>从该 Git 远程获取所有分支</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git fetch [alias]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将远程分支合并到当前分支以使其保持最新状态</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git merge [alias]/[branch]
# 没有快进
$ git merge --no-ff [alias]/[branch]
# 仅快进
$ git merge --ff-only [alias]/[branch]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将本地分支提交传输到远程存储库分支</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git push [alias] [branch]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>从跟踪远程分支获取并合并任何提交</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git pull
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将另一个分支的一个特定提交合并到当前分支</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git cherry-pick [commit_id]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="远程" tabindex="-1"><a class="header-anchor" href="#远程" aria-hidden="true">#</a> 远程</h3><p>添加一个 git URL 作为别名</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote add [alias] [url]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示您设置的远程存储库的名称</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示远程存储库的名称和 URL</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除远程存储库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote rm [remote repo name]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更改 git repo 的 URL</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote set-url origin [git_url]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="跟踪路径更改" tabindex="-1"><a class="header-anchor" href="#跟踪路径更改" aria-hidden="true">#</a> 跟踪路径更改</h3><p>从项目中删除文件并暂存删除以进行提交</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git rm [file]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更改现有文件路径并暂存移动</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git mv [existing-path] [new-path]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示所有提交日志，并指示任何移动的路径</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git log --stat -M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="忽略文件" tabindex="-1"><a class="header-anchor" href="#忽略文件" aria-hidden="true">#</a> 忽略文件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/logs/*
# “！” 意思是不要忽视
!logs/.gitkeep
# 忽略 Mac 系统文件
.DS_store
# 忽略 node_modules 文件夹
node_modules
# 忽略 SASS 配置文件
.sass-cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>.gitignore</code> 文件指定了 Git 应该忽略的未跟踪的文件</p><h3 id="git-配置-ssh-代理" tabindex="-1"><a class="header-anchor" href="#git-配置-ssh-代理" aria-hidden="true">#</a> git 配置 ssh 代理</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ cat ~/.ssh/config
Host gitlab.com
# 直接使用 shadowsocks 提供的 socks5 代理端口
ProxyCommand nc -X 5 -x 127.0.0.1:1080 %h %p

Host github.com
ProxyCommand nc -X 5 -x 127.0.0.1:1080 %h %p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-技巧" tabindex="-1"><a class="header-anchor" href="#git-技巧" aria-hidden="true">#</a> Git 技巧</h2><h3 id="重命名分支" tabindex="-1"><a class="header-anchor" href="#重命名分支" aria-hidden="true">#</a> 重命名分支</h3><ul><li><p><strong>重命名</strong>为<code>new</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch -m &lt;new&gt;
git branch -m &lt;old&gt; &lt;new&gt; #重命名分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>推送</strong>并重置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git push origin -u &lt;new&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>删除</strong>远程分支</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git push origin --delete &lt;old&gt; #方法1
git push origin :oldBranchName #方法2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="log" tabindex="-1"><a class="header-anchor" href="#log" aria-hidden="true">#</a> Log</h3><p>按内容搜索更改</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git log -S&#39;&lt;a term in the source&gt;&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示特定文件随时间的变化</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git log -p &lt;file_name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>打印出很酷的日志可视化</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git log --pretty=oneline --graph --decorate --all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="分支" tabindex="-1"><a class="header-anchor" href="#分支" aria-hidden="true">#</a> 分支</h3><p>列出所有分支及其上游</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch -vv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>快速切换到上一个分支</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>只获取所有远程分支</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch -r
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>从另一个分支签出单个文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout &lt;branch&gt; -- &lt;file&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除本地存在远程不存在的分支</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote prune origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="commit" tabindex="-1"><a class="header-anchor" href="#commit" aria-hidden="true">#</a> Commit</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git commit -v --amend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重写最后的提交信息</p><h3 id="忽略文件的权限变化" tabindex="-1"><a class="header-anchor" href="#忽略文件的权限变化" aria-hidden="true">#</a> 忽略文件的权限变化</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config core.fileMode false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不再将文件的权限变化视作改动</p><h3 id="git-别名" tabindex="-1"><a class="header-anchor" href="#git-别名" aria-hidden="true">#</a> Git 别名</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,139),x={href:"https://gist.github.com/johnpolacek/69604a1f6861129ef088",target:"_blank",rel:"noopener noreferrer"},p=n(`<h3 id="设置大小写敏感" tabindex="-1"><a class="header-anchor" href="#设置大小写敏感" aria-hidden="true">#</a> 设置大小写敏感</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 查看git 的设置
$ git config --get core.ignorecase
# 设置大小写敏感
$ git config core.ignorecase false
# 远程有俩相同目录，通过这种方式清除掉，然后提交记录
$ git rm -r --cached &lt;目录/文件&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改远程-commit-记录" tabindex="-1"><a class="header-anchor" href="#修改远程-commit-记录" aria-hidden="true">#</a> 修改远程 Commit 记录</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git rebase -i HEAD~3
# 表示要修改当前版本的倒数第三次状态
# 将要更改的记录行首单词 pick 改为 edit
pick 96dc3f9 提交 commit 描述内容 1
pick f1cce8a 提交 commit 描述内容 2
pick 6293516 提交 commit 描述内容 3
# Rebase eeb03a4..6293516 onto eeb03a4
#                     (3 commands)
#
# Commands:
# p, pick = 使用提交
# r, reword = 使用提交，但编辑提交消息
# e, edit = 使用提交，但停止修改
# s, squash = 使用提交，但融合到先前的提交中
# f, fixup = 像 squash，但丢弃此提交的日志消息
# x, exec = 使用 shell 运行命令(该行的其余部分)
# d, drop = 删除提交
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存并退出，会弹出下面提示</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 您现在可以修改提交，使用
#
#   git commit --amend
#
# 对更改感到满意后，运行
#
#   git rebase --continue
#
# 1. 通过这条命令进入编辑更改 commit，保存退出
$ git commit --amend
# 2. 保存退出确认修改，继续执行下面命令,
$ git rebase --continue
# 如果修改多条记录反复执行上面两条命令直到完成所有修改

# 最后，确保没有人提交进行推送，最好不要加 -f 强制推送
$ git push -f origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="撤销远程记录" tabindex="-1"><a class="header-anchor" href="#撤销远程记录" aria-hidden="true">#</a> 撤销远程记录</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 撤销一条记录
$ git reset --hard HEAD~1
# 强制同步到远程仓库
$ git push -f origin HEAD:master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="放弃本地修改内容" tabindex="-1"><a class="header-anchor" href="#放弃本地修改内容" aria-hidden="true">#</a> 放弃本地修改内容</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 如果有的修改以及加入暂存区的话
$ git reset --hard
# 还原所有修改，不会删除新增的文件
$ git checkout .
# 下面命令会删除新增的文件
$ git clean -xdf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取最近一次提交的-hash" tabindex="-1"><a class="header-anchor" href="#获取最近一次提交的-hash" aria-hidden="true">#</a> 获取最近一次提交的 Hash</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git rev-parse HEAD # e10721cb8859b2c
# 获取短 hash
$ git rev-parse --short HEAD # e10721c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除已经合并到-master-的分支" tabindex="-1"><a class="header-anchor" href="#删除已经合并到-master-的分支" aria-hidden="true">#</a> 删除已经合并到 master 的分支</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch --merged master | grep -v &#39;^\\*\\|  master&#39; | xargs -n 1 git branch -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="把-a-分支的某一个-commit-放到-b-分支上" tabindex="-1"><a class="header-anchor" href="#把-a-分支的某一个-commit-放到-b-分支上" aria-hidden="true">#</a> 把 A 分支的某一个 commit，放到 B 分支上</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 切换到 B 分支
$ git checkout &lt;B&gt;
# 将 A 分支 &lt;hash-id&gt; 的内容 pick 到 B 分支
$ git cherry-pick &lt;hash-id&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="回到远程仓库的状态" tabindex="-1"><a class="header-anchor" href="#回到远程仓库的状态" aria-hidden="true">#</a> 回到远程仓库的状态</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git fetch --all &amp;&amp; git reset --hard origin/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>抛弃本地所有的修改，回到远程仓库的状态</p><h3 id="重设第一个-commit" tabindex="-1"><a class="header-anchor" href="#重设第一个-commit" aria-hidden="true">#</a> 重设第一个 commit</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git update-ref -d HEAD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>把所有的改动都重新放回工作区，并<strong>清空所有的 commit</strong>，这样就可以重新提交第一个 <code>commit</code> 了</p><h3 id="查看冲突文件列表" tabindex="-1"><a class="header-anchor" href="#查看冲突文件列表" aria-hidden="true">#</a> 查看冲突文件列表</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git diff --name-only --diff-filter=U
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="展示工作区的冲突文件列表" tabindex="-1"><a class="header-anchor" href="#展示工作区的冲突文件列表" aria-hidden="true">#</a> 展示工作区的冲突文件列表</h3><p>输出工作区和暂存区的 different (不同)。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git diff
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>还可以展示本地仓库中任意两个 commit 之间的文件变动：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git diff &lt;commit-id&gt; &lt;commit-id&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="展示暂存区和最近版本的不同" tabindex="-1"><a class="header-anchor" href="#展示暂存区和最近版本的不同" aria-hidden="true">#</a> 展示暂存区和最近版本的不同</h3><h3 id="中文乱码的解决方案" tabindex="-1"><a class="header-anchor" href="#中文乱码的解决方案" aria-hidden="true">#</a> 中文乱码的解决方案</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global core.quotepath false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="展示暂存区、工作区和最近版本的不同" tabindex="-1"><a class="header-anchor" href="#展示暂存区、工作区和最近版本的不同" aria-hidden="true">#</a> 展示暂存区、工作区和最近版本的不同</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git diff HEAD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出工作区、暂存区 和本地最近的版本(commit)的 different(不同)。</p><h3 id="删除已经合并到-master-的分支-1" tabindex="-1"><a class="header-anchor" href="#删除已经合并到-master-的分支-1" aria-hidden="true">#</a> 删除已经合并到 master 的分支</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch --merged master | grep -v &#39;^\\*\\|  master&#39; | xargs -n 1 git branch -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="关联远程分支" tabindex="-1"><a class="header-anchor" href="#关联远程分支" aria-hidden="true">#</a> 关联远程分支</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch -u origin/mybranch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者在 <code>push</code> 时加上 <code>-u</code> 参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git push origin/mybranch -u
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>关联之后，<code>git branch -vv</code> 就可以展示关联的远程分支名了, 同时推送到远程仓库直接：<code>git push</code>，不需要指定远程仓库</p><h3 id="查看远程分支和本地分支的对应关系" tabindex="-1"><a class="header-anchor" href="#查看远程分支和本地分支的对应关系" aria-hidden="true">#</a> 查看远程分支和本地分支的对应关系</h3><h3 id="展示当前分支的最近的-tag" tabindex="-1"><a class="header-anchor" href="#展示当前分支的最近的-tag" aria-hidden="true">#</a> 展示当前分支的最近的 tag</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git describe --tags --abbrev=0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看某段代码是谁写的" tabindex="-1"><a class="header-anchor" href="#查看某段代码是谁写的" aria-hidden="true">#</a> 查看某段代码是谁写的</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git blame &lt;file-name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>blame</code> 的意思为<code>责怪</code>，你懂的。</p><h3 id="修改作者名" tabindex="-1"><a class="header-anchor" href="#修改作者名" aria-hidden="true">#</a> 修改作者名</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git commit --amend --author=&#39;Author Name &lt;email@address.com&gt;&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="修改远程仓库的-url" tabindex="-1"><a class="header-anchor" href="#修改远程仓库的-url" aria-hidden="true">#</a> 修改远程仓库的 url</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote set-url origin &lt;URL&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="增加远程仓库" tabindex="-1"><a class="header-anchor" href="#增加远程仓库" aria-hidden="true">#</a> 增加远程仓库</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote add origin &lt;remote-url&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="列出所有远程仓库" tabindex="-1"><a class="header-anchor" href="#列出所有远程仓库" aria-hidden="true">#</a> 列出所有远程仓库</h3><h3 id="查看两个星期内的改动" tabindex="-1"><a class="header-anchor" href="#查看两个星期内的改动" aria-hidden="true">#</a> 查看两个星期内的改动</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git whatchanged --since=&#39;2 weeks ago&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="从-stash-中拿出某个文件的修改" tabindex="-1"><a class="header-anchor" href="#从-stash-中拿出某个文件的修改" aria-hidden="true">#</a> 从 stash 中拿出某个文件的修改</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout &lt;stash@{n}&gt; -- &lt;file-path&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="展示所有-tracked-的文件" tabindex="-1"><a class="header-anchor" href="#展示所有-tracked-的文件" aria-hidden="true">#</a> 展示所有 tracked 的文件</h3><h3 id="展示所有-untracked-的文件" tabindex="-1"><a class="header-anchor" href="#展示所有-untracked-的文件" aria-hidden="true">#</a> 展示所有 untracked 的文件</h3><h3 id="展示所有忽略的文件" tabindex="-1"><a class="header-anchor" href="#展示所有忽略的文件" aria-hidden="true">#</a> 展示所有忽略的文件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git ls-files --others -i --exclude-standard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="把某一个分支导出成一个文件" tabindex="-1"><a class="header-anchor" href="#把某一个分支导出成一个文件" aria-hidden="true">#</a> 把某一个分支导出成一个文件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git bundle create &lt;file&gt; &lt;branch-name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="从包中导入分支" tabindex="-1"><a class="header-anchor" href="#从包中导入分支" aria-hidden="true">#</a> 从包中导入分支</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone repo.bundle &lt;repo-dir&gt; -b &lt;branch-name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>新建一个分支，分支内容就是上面 <code>git bundle create</code> 命令导出的内容</p><h3 id="执行-rebase-之前自动-stash" tabindex="-1"><a class="header-anchor" href="#执行-rebase-之前自动-stash" aria-hidden="true">#</a> 执行 rebase 之前自动 stash</h3><h3 id="从远程仓库根据-id-拉下某一状态-到本地分支" tabindex="-1"><a class="header-anchor" href="#从远程仓库根据-id-拉下某一状态-到本地分支" aria-hidden="true">#</a> 从远程仓库根据 ID，拉下某一状态，到本地分支</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git fetch origin pull/&lt;id&gt;/head:&lt;branch-name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="详细展示一行中的修改" tabindex="-1"><a class="header-anchor" href="#详细展示一行中的修改" aria-hidden="true">#</a> 详细展示一行中的修改</h3><h3 id="清除-gitignore-文件中记录的文件" tabindex="-1"><a class="header-anchor" href="#清除-gitignore-文件中记录的文件" aria-hidden="true">#</a> 清除 gitignore 文件中记录的文件</h3><h3 id="展示忽略的文件" tabindex="-1"><a class="header-anchor" href="#展示忽略的文件" aria-hidden="true">#</a> 展示忽略的文件</h3><h3 id="commit-历史中显示-branch1-有的但是-branch2-没有-commit" tabindex="-1"><a class="header-anchor" href="#commit-历史中显示-branch1-有的但是-branch2-没有-commit" aria-hidden="true">#</a> commit 历史中显示 Branch1 有的但是 Branch2 没有 commit</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git log Branch1 ^Branch2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="在-commit-log-中显示-gpg-签名" tabindex="-1"><a class="header-anchor" href="#在-commit-log-中显示-gpg-签名" aria-hidden="true">#</a> 在 commit log 中显示 GPG 签名</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git log --show-signature
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="新建并切换到新分支上-同时这个分支没有任何-commit" tabindex="-1"><a class="header-anchor" href="#新建并切换到新分支上-同时这个分支没有任何-commit" aria-hidden="true">#</a> 新建并切换到新分支上，同时这个分支没有任何 commit</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout --orphan &lt;branch-name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>相当于保存修改，但是重写 commit 历史</p><h3 id="展示任意分支某一文件的内容" tabindex="-1"><a class="header-anchor" href="#展示任意分支某一文件的内容" aria-hidden="true">#</a> 展示任意分支某一文件的内容</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git show &lt;branch-name&gt;:&lt;file-name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置-http-和-socks-代理" tabindex="-1"><a class="header-anchor" href="#配置-http-和-socks-代理" aria-hidden="true">#</a> 配置 http 和 socks 代理</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 查看代理
$ git config --global http.proxy
$ git config --global https.proxy
$ git config --global socks.proxy

# 设置代理
# 适用于 privoxy 将 socks 协议转为 http 协议的 http 端口
$ git config --global http.proxy http://127.0.0.1:1080
$ git config --global https.proxy http://127.0.0.1:1080
$ git config --global socks.proxy 127.0.0.1:1080

# 取消代理
$ git config --global --unset http.proxy
$ git config --global --unset https.proxy
$ git config --global --unset socks.proxy

# 只对 github.com 设置代理
$ git config --global http.https://github.com.proxy socks5://127.0.0.1:1080
$ git config --global https.https://github.com.proxy socks5://127.0.0.1:1080

# 取消 github.com 代理
$ git config --global --unset http.https://github.com.proxy
$ git config --global --unset https.https://github.com.proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="clone-最新一次提交" tabindex="-1"><a class="header-anchor" href="#clone-最新一次提交" aria-hidden="true">#</a> clone 最新一次提交</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone --depth=1 https://github.com/user/repo.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>只会 <code>clone</code> 最近一次提交，将减少 <code>clone</code> 时间</p><h3 id="忽略某个文件的改动" tabindex="-1"><a class="header-anchor" href="#忽略某个文件的改动" aria-hidden="true">#</a> 忽略某个文件的改动</h3><p>关闭 track 指定文件的改动，也就是 Git 将不会在记录这个文件的改动</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git update-index --assume-unchanged path/to/file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>恢复 track 指定文件的改动</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git update-index --no-assume-unchanged path/to/file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="以最后提交的顺序列出所有-git-分支" tabindex="-1"><a class="header-anchor" href="#以最后提交的顺序列出所有-git-分支" aria-hidden="true">#</a> 以最后提交的顺序列出所有 Git 分支</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git for-each-ref --sort=-committerdate --format=&#39;%(refname:short)&#39; refs/heads
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最新的放在最上面</p><h3 id="在-commit-log-中查找相关内容" tabindex="-1"><a class="header-anchor" href="#在-commit-log-中查找相关内容" aria-hidden="true">#</a> 在 commit log 中查找相关内容</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git log --all --grep=&#39;&lt;given-text&gt;&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过 grep 查找，given-text: 所需要查找的字段</p><h3 id="把暂存区的指定-file-放到工作区中" tabindex="-1"><a class="header-anchor" href="#把暂存区的指定-file-放到工作区中" aria-hidden="true">#</a> 把暂存区的指定 file 放到工作区中</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git reset &lt;file-name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不添加参数，默认是 <code>-mixed</code></p><h3 id="配置-ssh-协议代理" tabindex="-1"><a class="header-anchor" href="#配置-ssh-协议代理" aria-hidden="true">#</a> 配置 SSH 协议代理</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 对于使用 git@ 协议的，可以配置 socks5 代理
# macOS 系统编辑 ~/.ssh/config 文件，添加这几行，设置 github 代理
Host github.com
  ProxyCommand nc -X 5 -x 127.0.0.1:1080 %h %p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="另见" tabindex="-1"><a class="header-anchor" href="#另见" aria-hidden="true">#</a> 另见</h2>`,105);function f(_,k){const i=s("ExternalLinkIcon");return r(),l("div",null,[v,g,o,c(" more "),m,e("p",null,[a("本备忘单总结了常用的 "),e("a",h,[a("Git"),d(i)]),a(" 命令行指令，以供快速参考。")]),b,e("p",null,[a("也可以看看："),e("a",x,[a("更多别名"),d(i)])]),p])}const y=t(u,[["render",f],["__file","Git备忘清单.html.vue"]]);export{y as default};
