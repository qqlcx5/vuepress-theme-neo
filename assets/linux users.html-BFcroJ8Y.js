import{_ as e,c as d,o as a,a as i}from"./app-7eMFvEA8.js";const l={},s=i(`<h1 id="面试官-说说你对-linux-用户管理的理解-相关的命令有哪些" tabindex="-1"><a class="header-anchor" href="#面试官-说说你对-linux-用户管理的理解-相关的命令有哪些" aria-hidden="true">#</a> 面试官：说说你对 linux 用户管理的理解？相关的命令有哪些？</h1><p><img src="https://static.vue-js.com/8d8d9d70-0417-11ec-8e64-91fdec0f05a1.png" alt=""></p><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么" aria-hidden="true">#</a> 一、是什么</h2><p>Linux是一个多用户的系统，允许使用者在系统上通过规划不同类型、不同层级的用户，并公平地分配系统资源与工作环境</p><p>而与 <code>Windows</code> 系统最大的不同， <code>Linux</code> 允许不同的用户同时登录主机，同时使用主机的资源</p><p>既然是多用户的系统，那么最常见的问题就是权限，不同的用户对于不同的文件都应该有各自的权限</p><p>例如，小 A 希望个人文件不被其他用户读取，而如果不对文件进行权限设置，共享了主机资源的小 B 也可以读取小 A 的个人文件，这是不合理的</p><p>这里面涉及到用户与用户组的概念</p><h2 id="二、用户与用户组" tabindex="-1"><a class="header-anchor" href="#二、用户与用户组" aria-hidden="true">#</a> 二、用户与用户组</h2><p><code>Linux </code>以 “用户与用户组” 的概念，建立用户与文件权限之间的联系，保证系统能够充分考虑每个用户的隐私保护，很大程度上保障了 <code>Linux</code> 作为多用户系统的可行性</p><p>从文件权限的角度出发，“用户与用户组” 引申为三个具体的对象：</p><ul><li><strong>文件所有者</strong></li><li><strong>用户组成员</strong></li><li><strong>其他人</strong></li></ul><p>每一个对象对某一个文件的持有权限是不同的</p><h3 id="文件所有者" tabindex="-1"><a class="header-anchor" href="#文件所有者" aria-hidden="true">#</a> 文件所有者</h3><p>当一个用户创建了一个文件，这个用户就是这个文件的文件所有者。文件所有者对文件拥有最高权限，同时排他性地拥有该文件</p><p>除非文件所有者开放权限，否则其他人无法对文件执行查看、修改等操作</p><h3 id="用户组" tabindex="-1"><a class="header-anchor" href="#用户组" aria-hidden="true">#</a> 用户组</h3><p>将 “其他用户” 区分为用户组成员和其他人后，若文件所有者希望对部分用户开放权限，而对其他人继续保持私有，则只需要将这部分用户与文件所有者划入一个用户组</p><p>这样，这部分用户就成了与文件所有者同组的用户组成员。用户可以对用户组成员开放文件权限，用户组成员则具备了查看、修改文件的权限，而对其他无关用户保持私有</p><p>例如，团队成员之间保持文件资源共享，但对非团队成员保持私有，这就需要将文件所有者与团队成员用户划分为同一个用户组，再对用户组成员开放权限即可</p><h3 id="其他人" tabindex="-1"><a class="header-anchor" href="#其他人" aria-hidden="true">#</a> 其他人</h3><p>既与文件所有者没有任何联系的其他用户</p><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3><p>户和用户组的对应关系是：一对一、多对一、一对多或多对多：</p><ul><li>一对一：某个用户可以是某个组的唯一成员</li><li>多对一：多个用户可以是某个唯一的组的成员，不归属其它用户组</li><li>一对多：某个用户可以是多个用户组的成员</li><li>多对多：多个用户对应多个用户组，并且几个用户可以是归属相同的组</li></ul><h3 id="拓展" tabindex="-1"><a class="header-anchor" href="#拓展" aria-hidden="true">#</a> 拓展</h3><p>当我们使用<code>ls -l</code>的时候，会列出当前目录的文件信息，如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>drwxr-xr-x   3  osmond   osmond    4096  05-16 13:32   nobp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>d：文件类型</li><li>rwxr-xr-x：文件权限</li><li>3 硬链接数或目录包含的文件数</li><li>osmond：文件所有者</li><li>4096：文件长度</li><li>05-16 13:32：文件上次修改的事件和日期</li><li>nobp：文件名</li></ul><p>下面主要看看文件权限分析，实际上是由9个字符组成，每3个一组：</p><ul><li>第一组控制文件<strong>所有者</strong>的访问权限</li><li>第二组控制所有者<strong>所在用户组</strong>的其他成员的访问权限</li><li>第三组控制<strong>系统其他用户</strong>的访问权限</li></ul><p><code>-</code>代表当前没有，<code>rwx</code>对应代表的意思如下：</p><p><img src="https://static.vue-js.com/9ac2cf60-0417-11ec-8e64-91fdec0f05a1.png" alt=""></p><h3 id="三、用户操作" tabindex="-1"><a class="header-anchor" href="#三、用户操作" aria-hidden="true">#</a> 三、用户操作</h3><p>用户相关的操作有如下：</p><h3 id="新增用户" tabindex="-1"><a class="header-anchor" href="#新增用户" aria-hidden="true">#</a> 新增用户</h3><p><code>useradd</code> 可以用来创建新用户，简要语法为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>useradd [options] [username]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：</p><p>添加一个一般用户</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># useradd kk //添加用户kk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>为添加的用户指定相应的用户组</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># useradd -g root kk //添加用户kk，并指定用户所在的组为root用户组
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建一个系统用户</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># useradd -r kk //创建一个系统用户kk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>为新添加的用户指定/home目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># useradd-d /home/myf kk //新添加用户kk，其home目录为/home/myf
//当用户名kk登录主机时，系统进入的默认目录为/home/myf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置密码" tabindex="-1"><a class="header-anchor" href="#设置密码" aria-hidden="true">#</a> 设置密码</h2><p>创建的用户还没有设置登录密码，需要利用<code>passwd</code>进行密码设置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>asswd [options] [username]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>option</code> 参数有如下：</p><ul><li>-d 删除密码</li><li>-f 强迫用户下次登录时必须修改口令</li><li>-w 口令要到期提前警告的天数</li><li>-k 更新只能发送在过期之后</li><li>-l 停止账号使用</li><li>-S 显示密码信息</li><li>-u 启用已被停止的账户</li><li>-x 指定口令最长存活期</li><li>-g 修改群组密码</li><li>指定口令最短存活期</li><li>-i 口令过期后多少天停用账户</li></ul><p>例如，修改用户密码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># passwd runoob  //设置runoob用户的密码
Enter new UNIX password:  //输入新密码，输入的密码无回显
Retype new UNIX password:  //确认密码
passwd: password updated successfully
# 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示账号密码信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># passwd -S runoob
runoob P 05/13/2010 0 99999 7 -1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>删除用户密码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># passwd -d lx138 
passwd: password expiry information changed.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改用户" tabindex="-1"><a class="header-anchor" href="#修改用户" aria-hidden="true">#</a> 修改用户</h3><p><code>chage</code> 命令用来修改与用户密码相关的过期信息，如密码失效日、密码最短保留天数、失效前警告天数等</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>chage [option] [username]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>常见的参数有：</p><ul><li><p>-d：指定密码最后修改日期</p></li><li><p>-E：密码到期的日期</p></li><li><p>-l：列出用户以及密码的有效期</p></li><li><p>-m：密码能够更改的最小天数</p></li><li><p>-M：密码保持有效的最大天数</p></li></ul><h3 id="删除用户" tabindex="-1"><a class="header-anchor" href="#删除用户" aria-hidden="true">#</a> 删除用户</h3><p>userdel 命令用来删除用户的相关的所有数据。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>userdel [options] [username]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>常见的参数有：</p><ul><li>-r：删除用户登入目录以及目录中所有文件</li></ul><p>例如删除用户账号</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># userdel hnlinux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用户组相关的操作如下：</p><h3 id="新增用户组" tabindex="-1"><a class="header-anchor" href="#新增用户组" aria-hidden="true">#</a> 新增用户组</h3><p><code>groupadd</code>用于创建一个新的工作组，新工作组的信息将被添加到系统文件中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>groupadd [options] [groupname]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>常见的参数有如下：</p><ul><li>-g：指定新建工作组的 id；</li><li>-r：创建系统工作组，系统工作组的组ID小于 500</li><li>-K：覆盖配置文件 &quot;/ect/login.defs&quot;</li><li>-o：允许添加组 ID 号不唯一的工作组</li><li>-f,--force: 如果指定的组已经存在，此选项将失明了仅以成功状态退出</li></ul><p>例如创建一个新的组，并添加组 ID。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>＃groupadd －g 344 runoob
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="修改用户-1" tabindex="-1"><a class="header-anchor" href="#修改用户-1" aria-hidden="true">#</a> 修改用户</h3><p><code>groupmod </code>命令用来修改 <code>group </code>相关的参数，例如群组识别码或者名称</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>groupmod [options] [groupname]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>常见的参数有：</p><ul><li>-g &lt;群组识别码&gt; 　设置欲使用的群组识别码</li><li>-o 　重复使用群组识别码</li><li>-n &lt;新群组名称&gt; 　设置欲使用的群组名</li></ul><p>例如修改组名：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># groupmod -n linux linuxso 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除用户组" tabindex="-1"><a class="header-anchor" href="#删除用户组" aria-hidden="true">#</a> 删除用户组</h3><p><code>groupdel</code> 用于删除用户组，如果该群组中仍包括某些用户，则必须先删除这些用户后，方能删除群组</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>groupdel [groupname]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>日常工作通常会碰到只有<code>root</code>用户才有权限执行的操作，这就需要使用用户身份切换的命令：</p><h3 id="su" tabindex="-1"><a class="header-anchor" href="#su" aria-hidden="true">#</a> su</h3><p>用于变更为其他使用者的身份，除 <code>root</code> 外，需要键入该使用者的密码</p><h3 id="sudo" tabindex="-1"><a class="header-anchor" href="#sudo" aria-hidden="true">#</a> sudo</h3><p><code>sudo</code>命令以系统管理者的身份执行指令，也就是说，经由 sudo 所执行的指令就好像是 root 亲自执行</p><p>不是所有的用户都能执行 <code>sudo</code> 命令的，而是在 <code>/etc/sudoers</code> 文件内的用户才能执行这个命令</p><p>例如<code>sudo</code>命令使用<code>ls</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ sudo ls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://zhuanlan.zhihu.com/p/37964411</li><li>https://zhuanlan.zhihu.com/p/105482468</li></ul>`,98),n=[s];function r(t,c){return a(),d("div",null,n)}const u=e(l,[["render",r],["__file","linux users.html.vue"]]);export{u as default};
